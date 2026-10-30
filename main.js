let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];
let onLoop = true;

function showMessage(contactList, index) {
  if (!Array.isArray(contactList)) {
    return "Erro: O parâmetro informado não é uma lista";
  }

  let contact = contactList[index];
  if (!contact) {
    return "Erro: Contato não encontrado";
  }

  let message = "";
  for (const key in contact) {
    message += `${key} - ${contact[key]} \n`;
  }

  return message;
}

function showAllContacts(contacts) {
  let numeroContato = 1;
  let message = "";
  for (const contact of contacts) {
    message += `Contato ${numeroContato}: \n`;
    numeroContato++;
    for (const key in contact) {
      message += `${key} - ${contact[key]} \n`;
    }
  }
  return message;
}

function createNewContact(contactList) {
  let name = prompt("Digite o nome do contato");
  let phone = prompt("Digite o número de telefone do contato");
  let email = prompt("Digite o email do contato");

  if (
    name === null ||
    name.trim() === "" ||
    phone === null ||
    phone.trim() === "" ||
    email === null ||
    email.trim() === ""
  ) {
    return alert("Erro! Um ou mais dados estão vazios");
  }

  contactList.push({
    name: name,
    phone: phone,
    email: email,
  });
  alert("Contato adicionado com sucesso!");
}

function sortList(list) {
  let method = prompt(
    "Como pretende organizar a lista? \n 1 - nome \n 2 - email \n 3 - telefone",
  );

  switch (method) {
    case "1":
      method = "name";
      break;
    case "2":
      method = "email";
      break;
    case "3":
      method = "phone";
      break;
    default:
      alert("Operação inválida!");
      return list;
  }

  return list.sort((a, b) => a[method].localeCompare(b[method]));
}

while (onLoop) {
  let userPrompt = prompt(
    "O que deseja fazer? Digite: \n 1 - Mostrar o primeiro contato \n 2 - Mostrar o último contato \n 3 - Mostrar todos os contatos \n 4 - Adicionar um novo contato \n 5 - Organizar a lista \n 6 - Sair",
  );

  switch (userPrompt) {
    case "1":
      alert(showMessage(contacts, 0));
      break;
    case "2":
      alert(showMessage(contacts, contacts.length - 1));
      break;
    case "3":
      alert(showAllContacts(contacts));
      break;
    case "4":
      createNewContact(contacts);
      break;
    case "5":
      sortList(contacts);
      alert(showAllContacts(contacts));
      break;
    case "6":
    case null:
      alert("Saindo!");
      onLoop = false;
      break;
    default:
      alert("Comando inválido! Digite apenas 1, 2, 3, 4, 5 ou 6!");
  }
}
