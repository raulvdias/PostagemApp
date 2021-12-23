# PostagemApp

- Aplicativo que adiciona e lista postagens.
 
**Separação de contextos**

Camada de apresentação (Views)
- Se comunica com outras camadas por meio das quais distribui os resultados para a camada do navegador,  é uma camada que os usuários podem acessar diretamente (como uma página da web).

Camada Lógica (index.js)
- Controla a funcionalidade de um aplicativo executando processamento detalhado, como por exemplo, rotas.

Camada de dados (Models)
- A camada de dados inclui os mecanismos de persistência de dados (servidores de banco de dados, compartilhamentos de arquivos, etc.), é a camada de acesso a dados que encapsula os mecanismos de persistência e expõe os dados. 
