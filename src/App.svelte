<script>
	import {db} from './main.js'
	import "firebase/firestore"; 

    // 저장하기 누르면 실행
	function save() {


        let pageArray_ex = new Array(0);

        // example
    	var pageArray1 = {
        canvas : klass {_objects: Array(2), lowerCanvasEl: canvas#canvas-page-0.s-lGOyMSU-CVDD.lower-canvas, _originalCanvasStyle: CSSStyleDeclaration},
        canvasId : "canvas-page-0",
        canvasMrapperId : "canvas-page-0-wrapper",
        defaultObject : DefaultObjectClass {box: klass, title: klass},
        index : 0,
        object : [],
        path : "/",
        selectComponent: [],
        zoom: 0.3,
        [[Prototype]] : object
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

        pageArray_ex[0] = pageArray1
        pageArray_ex[1] = pageArray2
        pageArray_ex[2] = pageArray3

        //pageArray_ex 대신 실제 pageArray 넣기
        for (var i = 0; i < pageArray_ex.length; i++){
            db.collection('save').add(pageArray_ex[i]).then((result)=>{
                window.location.href = '/index.html'
            }).catch((error)=>{
                console.log(err)
            })
        }
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