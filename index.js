const express = require("express");
const formidableMiddleware = require('express-formidable');
const app = express();
app.use(formidableMiddleware());


app.get("/", (req, res)=>{
    try {
        console.log(req.query);

    // si le client envoie un nombre d'arrondissement supérieur à 20
        if (Number(req.query.arrdt) > 20) {
            res.json({message: "This district does not exist"});
            
        }else{
              // déclaration d'un tableau qui contiendra les résultats
            let results = [];
             // on parcourt le tableau collecPoints
            for (let i = 0; i < pointsCollect.length; i++) {
                 // si l'arrondissement présent dans le tableau et égal à l'arrondissement envoyé en query
               if (pointsCollect[i].fields.arrdt === Number(req.query.arrdt)) {
                  // on ajoute cet objet dans le tabeau results

                results.push({
                    garden: pointsCollect[i].fields.garden,
                    address: pointsCollect[i].fields.address,
                    arrdt: pointsCollect[i].fields.arrdt,
                })
                
               };
                
            }
        }
  // le serveur renverra le tableau results
        res.json(results)
        
    } catch (error) {
        
    }
})

app.listen(300, ()=>{
    console.log('Server Started')
});