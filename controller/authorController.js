const Author = require('../models/Author');

// all author
module.exports.authors_index_get = async (req, res) =>{

   let searchOptions = {};
   if(req.query.name != null && req.query.name !== ''){
      searchOptions.name = new RegExp(req.query.name, 'i')
   }

   try {
      const authors = await Author.find(searchOptions)
      res.render('authors/index', {authors, searchOptions: req.query});
   } catch (error) {
      res.redirect('/');
   }
};

// new author
module.exports.authors_new_get =  (req, res) =>{
   res.render('authors/new', { author: new Author() })
};

//create author
module.exports.authors_index_post= async (req, res) => {
   const author = new Author({
      name: req.body.name
   })

   try{
      const newAuthor = await author.save()
      // res.redirect(authors/${newAuthor.id});
      res.redirect(`authors`);
   }catch{
      res.render('authors/new', {
         author: author,
         errorMessage: 'error creating author'
      })
   }
};

