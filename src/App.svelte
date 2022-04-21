<script>
	import {db} from './main.js'
	import "firebase/firestore"; 

	function save() {
    	var pageArray = {
        ID : "Object0",
        X : 218,
        Y : 119,
        W : 198,
        H : 270,
        Color : "C4C4C4",
        Strok : "FFFFFF"
        };

        var pageArray_str = JSON.stringify(pageArray);

        db.collection('save').add(pageArray).then((result)=>{
            window.location.href = '/index.html'
        }).catch((error)=>{
            console.log(err)
        })
  	}

	function recall() {
    	db.collection('save').get().then((결과)=>{
            결과.forEach((doc)=>{
                console.log(doc.data())
                
                var pageArray_str = JSON.stringify(doc.data());

                var 템플릿 = `<div class="design">
                <div class="flex-grow-1 p-4">
                    <h5 class="price">${pageArray_str}</h5>
                </div>
                </div>`;
                
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