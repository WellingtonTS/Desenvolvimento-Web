const listItens = [];

while (true) {
    const menuOption = prompt(`
        Digite a opção desejada:
        1 - Cadastrar item
        2 - Ver itens cadastrados
        3 - Remover item cadastrado
        4 - Sair do programa
        `);
    if (menuOption === "4" || menuOption === null) {
        break;
    }

    if (menuOption === "") {
        alert("Por favor, escolha uma das opções!");
        continue;
    }

    switch (menuOption) {
        case "1":
            while (true) {
                let addItem = prompt("Digite o nome do item para adicionar:");
                
                if (addItem === null) {
                break;
                }
                addItem = addItem.trim().split(" ").filter(Boolean).join(" ");

                if (addItem === "") {
                alert("Por favor, digite um nome para cadastrar:");
                continue;
                }
                if (listItens.includes(addItem)) {
                alert("Item já cadastrado!");
                } else {
                    listItens.push(addItem);
                    alert(`"${addItem}" cadastrado com sucesso!`)
                }
            }
            break;

        case "2":
            if (listItens.length === 0) {
                alert("Lista vazia!")
            } else {
                alert(listItens.join("-"));
            }
            break;
            
        case "3":
            console.log("Opção 3");
            if (listItens.length === 1) {
                const removedItemName = listItens.pop()
                alert(`"${removedItemName}" foi removido com sucesso!`)
                break;            
            }

            while (true) {
            if (listItens.length === 0) {
                alert("Lista vazia!");
                break;

            } else {
                let itemNameToRemove = prompt("Digite o nome para remover:");

                if (itemNameToRemove === null) break; 
                itemNameToRemove = itemNameToRemove.trim().split(" ").filter(Boolean).join(" ");

                if (itemNameToRemove === "") {
                    alert("Por favor, inserir nome para remover.");
                    continue;
                }   

                if (listItens.includes(itemNameToRemove)) {
                    listItens.splice(listItens.indexOf(itemNameToRemove), 1);
                    alert(`"${itemNameToRemove}" foi removido com sucesso!`);
                } else (
                    alert("Item não encontrado")
                )
            }
        }

            break;
        default:
            alert("Opção inválida!");
            break;
    }
}

alert("Programa encerrado");