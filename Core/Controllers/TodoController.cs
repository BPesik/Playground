using System;
using System.Collections.Generic;
using Core.Models;
using Core.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _toDoContext;

        public TodoController(TodoContext todoContext)
        {
            _toDoContext = todoContext;
        }

        [HttpGet]
        public IEnumerable<Todo> GetAll()
        {
            var todoRepository = new TodoRepository(_toDoContext);

            return todoRepository.GetAllTodos().Result;
        }

        [HttpPost]
        public ActionResult<Todo> AddToDo([FromBody]Todo todo)
        {
            var todoRepository = new TodoRepository(_toDoContext);

            return todoRepository.AddTodo(todo).Result;
        }

        [HttpDelete]
        public ActionResult<Guid> DeleteTodo([FromQuery]Guid id)
        {
            var todoRepository = new TodoRepository(_toDoContext);

            try
            {
                return todoRepository.DeleteTodo(id).Result.Id;
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
