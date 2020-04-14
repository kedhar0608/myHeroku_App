const express=require('express');
const hbs=require('hbs');
var app=express();
var port=process.env.PORT || 2002;
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
})
app.get('/',(req,res) => {
    res.render('home.hbs',{
        pageTitle:'Home Page',
        yr: new Date().getFullYear()
    });
    
    });
    app.get('/contact',(req,res) => {
        res.render('contact.hbs',{
            pageTitle:'Contact Us',
            yr: new Date().getFullYear()
        });
        
        });
app.get('/ceo',(req,res) => {
            res.render('ceo.hbs',{
                pageTitle:'CEO',
            yr: new Date().getFullYear()
               
            });

            
            });
       
                    app.get('/about',(req,res) => {
                        res.render('about.hbs',{
                           pageTitle:'About'
                        });
                    });

app.listen(port,()=>
{
    console.log("running s")
});