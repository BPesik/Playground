using System.Collections.Generic;
using System.Linq;
using Core.Models;

namespace Core.Repositories
{
    public class TodoRepository
    {
        private readonly TodoContext _toDoContext;

        public TodoRepository(TodoContext todoContext)
        {
            _toDoContext = todoContext;
        }


        public IEnumerable<Todo> GetAllTodos()
        {
            using var database = _toDoContext;

            return database.Todos.ToList();
        }   
    }
}
