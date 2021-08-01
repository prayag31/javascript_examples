const students = [   
    { name: "Adhi", gender: "male" },   
    { name: "Ahamed", gender: "male" },   
    { name: "Rutika Kadam", gender: "female" },   
    { name: "Priyadharsini", gender: "female" }, 
]; 

function girlsname(el){

    return el.gender =='female'
    
    }
    
    function onlynames(el){
    
    return el.name
    }
    
    
    function namesWithA(el){
        
        return el[0] == 'A' || 'a'
        
    
        // Not able to apply logic in Task 2
       
        
    }
    //Task 1
       
    console.log(
        students.filter(girlsname)
        .map(onlynames)
    )
    
    // Task 2
    //Not able to implement this 
    
    console.log(students.map(onlynames)
    .filter(namesWithA)
    
    
        

    )
    
    
     
    function boysname(el){
    
        return el.gender=='male'
    }

    //Task 3
    
    console.log(
        students.filter(boysname).length
        )
    
});