//Json Object
 // java script Object notation
 // We store data in key & value format 

 let jsonObj={
    "id":9,
    fname:"Sumit",
    lname:"Raokhande"
 }

 // 1 using dot operator
 // 2 using square operator 


  // 1 using dot operator
    // console.log(`
    //     ID          :: ${jsonObj.id}
    //     First name  :: ${jsonObj.fname}
    //     Last name   :: ${jsonObj.lname}
    // `);
    
    // 2 using square operator 
    // console.log(`
    // --------------------------------
    //     ID          :: ${jsonObj["id"]}
    //     First name  :: ${jsonObj['fname']}
    //     Last name   :: ${jsonObj["lname"]}
    // `);

   
    // array of Object

    let arrObj=[
        {
            "id":9,
            fname:"Sumit",
            lname:"Raokhande",
            country:{
                cid:1,
                cname:"India"
            },
            month:["Jan","May","Dec"],
            result:[
                {
                    subj:"M1",
                    marks:40
                },
                {
                    subj:"M2",
                    marks:45
                },
                {
                    subj:"M3",
                    marks:55
                }
            ]

        },
        {
            "id":6,
            fname:"Kiran",
            lname:"Raokhande",
            country:{
                cid:2,
                cname:"US"
            },
            month:["Feb","Aug","Nov"],
            result:[
                {
                    subj:"M1",
                    marks:45
                },
                {
                    subj:"M2",
                    marks:55
                },
                {
                    subj:"M3",
                    marks:65
                }
            ]
        },
        {
            "id":3,
            fname:"Spruha",
            lname:"Raokhande",
            country:{
                cid:3,
                cname:"Japan"
            },
            month:["March","July","Oct"],
            result:[
                {
                    subj:"M1",
                    marks:60
                },
                {
                    subj:"M2",
                    marks:75
                },
                {
                    subj:"M3",
                    marks:55
                }
            ]
        }
    ];

    // console.log(`
    //      Id          :: ${arrObj[1].id}
    //      First name  :: ${arrObj[1].fname}
    //      Last name   :: ${arrObj[1].lname}   
    // `);


    for(let i=0;i<arrObj.length;i++){
        console.log(`
         Id          :: ${arrObj[i].id}
         First name  :: ${arrObj[i].fname}
         Last name   :: ${arrObj[i].lname}
         Country     :: ${arrObj[i].country.cname}   
         Month       :: ${arrObj[i].month.join(" ")}
         ------------ Result----------------    `);

        // for(let j=0;j<arrObj[i].result.length;j++){
            
        //     console.log(`
        //         Subject :: ${arrObj[i].result[j].subj}
        //         Marks   :: ${arrObj[i].result[j].marks}
        //     `);
        // }

        arrObj[i].result.forEach((item)=>{
            console.log(`
                Subject :: ${item.subj}
                Marks   :: ${item.marks}
            `);
        });


    }






