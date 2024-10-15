const accounts = [
    {
        id: 1,
        title: "Main Account",
        balance: "6700.56",
        spendings: [
            {
                category: "Rent",
                spent: "1450"
            },
            {
                category: "Groceries",
                spent: "564"
            },
            {
                category: "Restaurants",
                spent: "123"
            },
            {
                category: "Transport",
                spent: "81"
            },
            {
                category: "Internet",
                spent: "50"
            }
        ]
    },
    {
        id: 2,
        title: "Expenses",
        balance: "5134.63",
        spendings: [
            {
                category: "Netflix",
                spent: "19.99"
            },
            {
                category: "HBO Max",
                spent: "14.99"
            },
            {
                category: "Setapp",
                spent: "9.99"
            }
        ]
    },
    {
        id: 3,
        title: "Savings",
        balance: "36500.12",
        spendings: []
    }
]



const bal = document.getElementById("exp")
const spendEl = document.getElementById("spending")



function mapExpenses(){
    let expenseHtml = ''
    accounts.map((el, i)=>{
        
        expenseHtml+= `
            <div id="${el.id}" class="main">
            <span>${el.title}</span>
            <span  class="amt" id="main-amt">$ ${el.balance}</span>
            </div>
        `
    })
    bal.innerHTML = expenseHtml
}
mapExpenses()

const expenseEl = document.getElementById("1")
const spendingEl = document.getElementById("spending-div")
const twoColEl = document.getElementById("col-2")

document.addEventListener("click", (e)=>{
    //console.log(e.target.id)
    if(e.target.id === "1"){
        spendingEl.style.display = "block"
        twoColEl.classList.remove("container")
        twoColEl.classList.add("flex-container")
        mapSpending("1")
       // console.log("1 clicked")
    } else if(e.target.id === "2"){
        spendingEl.style.display = "block"
        twoColEl.classList.remove("container")
        twoColEl.classList.add("flex-container")
        mapSpending("2")
    } else if(e.target.id === "3"){
        spendingEl.style.display = "none"
        twoColEl.classList.add("container")
        twoColEl.classList.remove("flex-container")
        
    } 
})
function mapSpending(id){
    
    let numId = Number(id)
   
    let spendingHtml = ''
    accounts[id - 1].spendings.map((el, i)=>{
        // ////????????????????? 1450
        //sort? to get biggest nuber?
        let n = findWidth(accounts[id - 1].spendings)
        
         spendingHtml += `
        <div class="fill" style="width: ${(accounts[numId - 1].spendings[i].spent / n) * 100 + 40}%;">${accounts[numId - 1].spendings[i].category} $${accounts[numId - 1].spendings[i].spent}</div>
       
       
        `
    })
   spendEl.innerHTML = spendingHtml
  
}

function findWidth(arr){

let findMax = []
let a = arr.forEach((el) =>{
  findMax.push(Number(el.spent))
})
return Math.max(...findMax)
}



