# Projeto Feed 

Projeto de um feed (tipo de uma rede social) utilizando React.js com TypeScript, onde foram aplicados os conceitos de Clean Code
## Aprendizados

### React

- No react eventos esperam receber uma função e não uma execução de uma função;
  Exemplo:
```js
    // Forma correta
    <button onClick={handleLikeComment} >
        Executar Função
    </button>

    // Forma incorreta
    <button onClick={handleLikeComment()} >
        Executar Função
    </button>
```
- Sempre que for atualizar uma informação com useState, onde a informação atualizada depende do seu valor anterior, é sempre bom a utilização de função para receber o valor anterior;
  Exemplo:
```js
    const [likeCount, setLinkCount] =useState(0);
    // 
    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    function handleLikeComment(){
        setLikeCount(state => state + 1)
    }
```