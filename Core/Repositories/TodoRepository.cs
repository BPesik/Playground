using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Core.Repositories
{
    public class TodoRepository
    {
        private readonly TodoContext _toDoContext;

        public TodoRepository(TodoContext todoContext)
        {
            _toDoContext = todoContext;
        }

        public async Task<IEnumerable<Todo>> GetAllTodos()
        {
            using var database = _toDoContext;

            return await database.Todos.ToListAsync();
        }

        public async Task<Todo> AddTodo(Todo todo)
        {
            using var database = _toDoContext;

            database.Add(todo);
            await database.SaveChangesAsync();

            return todo;
        }

        public async Task<Todo> DeleteTodo(Guid id)
        {
            using var database = _toDoContext;

            var todoToRemove = database.Todos.SingleOrDefault(x => x.Id == id);

            var rowsDeleted = database.Todos.Remove(todoToRemove);

            await database.SaveChangesAsync();

            return todoToRemove;
        }
    }
}
