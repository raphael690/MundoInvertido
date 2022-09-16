import { subscribeToHellfireClub } from './firebase/hellfire-clube.js'

const txtName = document.getElementById('txtName') 
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionsList = document.getElementById('subscriptions')

//quando clicar irá executar uma ação
btnSubscribe.addEventListener('click', async () => {
      const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    
      //Salvar no banco de dados
      const subscriptionId = await subscribeToHellfireClub(subscription)
       txtName.value = '';
       txtEmail.value = '';
       txtLevel.value = '';
       txtCharacter.value = '';

       alert('Inscrito com sucesso: ${subscriptionId}');
})
 /*
async function loadData() {
    const subscriptions = await getHellifireClubSubscriptions()
    //irá converter objeto em string
    subscriptionsList.innerHTML = subscriptions.map(sub => '
            <li>
                ${sub.name}
            </li>
    ').join('')
       
    console.log(subscriptions)
}
loadData()*/


