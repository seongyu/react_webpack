import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
	res.send('get Posts');
});

router.get('/read/:id',(req,res)=>{
	res.send('You are trying to read post : '+req.params.id);
})

export default router;