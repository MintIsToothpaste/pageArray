<script>
	import {db} from './main.js'
	import "firebase/firestore"; 

    // 저장하기 누르면 실행
	function save() {

        // example
    	var pageArray1 = {
        ID : "Object0",
        X : 218,
        Y : 119,
        W : 198,
        H : 270,
        Color : "C4C4C4",
        Strok : "FFFFFF"
        };

        var pageArray2 = {
        ID : "Object1",
        X : 11,
        Y : 22,
        W : 33,
        H : 44,
        Color : "C1C1C1",
        Strok : "FFFFFF"
        };

        var pageArray3 = {
        ID : "Object2",
        X : 22,
        Y : 33,
        W : 44,
        H : 55,
        Color : "C3C3C3",
        Strok : "FFFFFF"
        };

        db.collection('save').add(pageArray1).then((result)=>{
            window.location.href = '/index.html'
        }).catch((error)=>{
            console.log(err)
        })

        db.collection('save').add(pageArray2).then((result)=>{
            window.location.href = '/index.html'
        }).catch((error)=>{
            console.log(err)
        })

        db.collection('save').add(pageArray3).then((result)=>{
            window.location.href = '/index.html'
        }).catch((error)=>{
            console.log(err)
        })

  	}

    // 불러오기 누르면 pageArray에 저장
	function recall() {

        let pageArray = new Array(0);

    	db.collection('save').get().then((결과)=>{
            결과.forEach((doc)=>{
                
                // pageArray에 담기
                pageArray = doc.data()

                console.log(pageArray)
            })
        })
  	}

</script>

<style>
	button {
    color:white;
    background:  #01BED6;
    border-radius: 0.3rem;
    width: 6rem;
    height: 2.2rem;
    padding: 0.5rem 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 0px;
  }
</style>

<button on:click={save}>저장하기</button>
<button on:click={recall}>불러오기</button>