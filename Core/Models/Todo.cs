using System;
namespace Core.Models
{
    public enum Importance
    {
        low,
        medium,
        high
    }

    public class Todo
    {
        public Guid? Id { get; set; }
        public string Task { get; set; }
        public Importance Importance { get; set; }
    }
}
