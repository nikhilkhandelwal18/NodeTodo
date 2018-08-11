var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        
        // seed database
        var starterTodo = [
            {
                username: 'test0',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test1',
                todo: 'Wash car',
                isDone: true,
                hasAttachment: false
            }

        ];

        Todos.create(starterTodo, function(err, results) {
            res.send(results);
        });
    });
}