## Desafio: Aplicação de To-Do List

## permitir ao usuário:

-[] Adicionar uma nova tarefa à lista;

-[] Marcar uma tarefa como concluída;

-[] Excluir uma tarefa da lista;

-[] Listar todas as tarefas cadastradas.

## Adicionar uma nova tarefa:

Método: POST
Endpoint: /api/tasks
Corpo da requisição (JSON): { "title": "Minha primeira tarefa" }
Resposta (JSON): { "id": "1", "title": "Minha primeira tarefa", "completed": false }
Marcar uma tarefa como concluída:

Método: PUT
Endpoint: /api/tasks/:id/complete
Parâmetro: id (ID da tarefa)
Resposta (JSON): { "message": "Tarefa marcada como concluída com sucesso." }
Excluir uma tarefa da lista:

Método: DELETE
Endpoint: /api/tasks/:id
Parâmetro: id (ID da tarefa)
Resposta (JSON): { "message": "Tarefa removida com sucesso." }
Listar todas as tarefas cadastradas:

Método: GET
Endpoint: /api/tasks
Resposta (JSON): [{ "id": "1", "title": "Minha primeira tarefa", "completed": true }, { "id": "2", "title": "Minha segunda tarefa", "completed": false }]
Observações:

Você pode usar bibliotecas como Express.js para criar o servidor e definir as rotas da API.
Não é necessário implementar autenticação ou controle de usuários neste desafio.
Concentre-se em escrever código limpo, modular e bem documentado.
Divirta-se codificando! Se tiver alguma dúvida ou precisar de esclarecimentos, sinta-se à vontade para perguntar. Boa sorte!
