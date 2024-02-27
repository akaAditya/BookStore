import express from 'express';
import { Book } from '../models/bookModels.js';

const router = express.Router()

  // Route for save a new Book
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res
          .status(400)
          .send({
            message: "Send all required fields: title, author, publsihYear",
          });
      }
      const newBook = {
          title: req.body.title,
          author: req.body.author,
          publishYear: req.body.publishYear,
      };
      const book = await Book.create(newBook);
      return res.status(201).send(book);
  
    } catch (error) {
      console.log(error.message)
      res.status(500).send({ message: error.message});
    }
  });
  
  // get all books from the database
  
  router.get('/', async (req, res)=>{
      try {
          const books = await Book.find({});
          return res.status(200).json({
              count: books.length,
              data: books
          });
      } catch (error) {
          console.log(error.message);
          res.status(500).send({message: error.message})
      }
  })
  
  // get one book from the DB using id
  
  router.get('/:id', async (req, res)=>{
      try {
          const { id } = req.params;
          const books = await Book.findById(id);
          return res.status(200).json(books);
      } catch (error) {
          console.log(error.message);
          res.status(500).send({message: error.message})
      }
  })
  
  // Update a book in DB
  
  router.put('/:id', async (req,res) =>{
      try {
          if (!req.body.title || !req.body.author || !req.body.publishYear) {
              return res
                .status(400)
                .send({
                  message: "Send all required fields: title, author, publsihYear",
                });
            }
          const {id} = req.params;
  
          const books = await Book.findByIdAndUpdate(id, req.body);
          if(!books){
              res.status(404).json({message: 'No books updated'})
          }
          return res.status(200).json({message: ' Books updated successfully'})
          
      } catch (error) {
          console.log(error.message);
          res.status(500).send({message: error.message})
      }
  });
  
  // Delete the book from DB
  
  router.delete('/:id', async (req, res)=>{
      try {
          const { id } = req.params;
          const book = await Book.findByIdAndDelete(id);
          if(!book){
              res.status(404).json({message: 'No books found'})
          }
          return res.status(200).json({message: ' Book deleted successfully'})
      } catch (error) {
          
      }
  });

  export default router;