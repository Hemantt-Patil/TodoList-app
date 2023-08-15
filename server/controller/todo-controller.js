import Todo from "../model/Todo.js";

const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return response.status(200).json(todos);
  } catch (err) {
    return response.status(500).json(err.message);
  }
}

const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );
    await todo.save();

    return response.status(200).json(todo);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const updateTodo = async (request, response) => {
  try {
     await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );
    const todo=await Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const deleteTodo = async (request, response) => {
    try {
       const todo=await Todo.findByIdAndDelete( request.params.id )
  
      return response.status(200).json(todo);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  };
export { addTodo, getAllTodos, toggleTodoDone, updateTodo ,deleteTodo };
