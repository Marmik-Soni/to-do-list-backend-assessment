// Initialize an empty array to store tasks
let tasks = [];

// Controller to get all tasks
exports.getAllTasks = (req, res) => {
    // Respond with the list of all tasks
    res.status(200).json(tasks);
};

// Controller to get a task by its ID
exports.getTaskById = (req, res) => {
    const { id } = req.params; // Extract task ID from request parameters
    const task = tasks.find(t => t.id === id); // Find the task with the given ID
    if (!task) {
        // If task is not found, respond with a 404 error
        return res.status(404).json({ error: 'Task not found' });
    }
    // Respond with the found task
    res.status(200).json(task);
};

// Controller to create a new task
exports.createTask = (req, res) => {
    const { title, description } = req.body; // Extract title and description from request body

    // Validate that title and description are provided
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    // Create a new task object
    const newTask = {
        id: Date.now().toString(), // Generate a unique ID using the current timestamp
        title,
        description,
        completed: false // Default completed status is false
    };

    tasks.push(newTask); // Add the new task to the tasks array
    res.status(201).json(newTask); // Respond with the created task
};

// Controller to update an existing task
exports.updateTask = (req, res) => {
    const { id } = req.params; // Extract task ID from request parameters
    const { title, description, completed } = req.body; // Extract updated fields from request body

    const taskIndex = tasks.findIndex(t => t.id === id); // Find the index of the task with the given ID
    if (taskIndex === -1) {
        // If task is not found, respond with a 404 error
        return res.status(404).json({ error: 'Task not found' });
    }

    // Validate that title and description are provided
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    // Update the task with the new values
    tasks[taskIndex] = {
        ...tasks[taskIndex], // Retain existing task properties
        title,
        description,
        completed: completed ?? tasks[taskIndex].completed // Update completed status if provided
    };

    // Respond with the updated task
    res.status(200).json(tasks[taskIndex]);
};

// Controller to delete a task by its ID
exports.deleteTask = (req, res) => {
    const { id } = req.params; // Extract task ID from request parameters
    const initialLength = tasks.length; // Store the initial length of the tasks array
    tasks = tasks.filter(t => t.id !== id); // Remove the task with the given ID

    if (tasks.length === initialLength) {
        // If no task was removed, respond with a 404 error
        return res.status(404).json({ error: 'Task not found' });
    }

    // Respond with a 204 status (No Content) to indicate successful deletion
    res.status(204).send();
};