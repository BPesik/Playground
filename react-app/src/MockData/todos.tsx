import { Todo } from "../types/data";

type MockedTodosProps = {
    numOfTodos: number;
}

function MockedTodos({ numOfTodos }: MockedTodosProps): Todo[] {
    const todos: Todo[] = [];

    for (let i = 0; i <= numOfTodos; i++){
        todos.push({id: i.toString(), importance: 1, task: `Mocked task ${i}` })
    }

    return todos;
}

export default MockedTodos;