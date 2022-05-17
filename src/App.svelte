<script>
	import {db} from './main.js'
	import "firebase/firestore"; 

    // 저장하기 누르면 실행
	function save() {

        let pageArray_ex = new Array(0);

        // example
    	var pageArray1 = {
        canvas : "klass {_objects: Array(2), lowerCanvasEl: canvas#canvas-page-0.s-lGOyMSU-CVDD.lower-canvas, _originalCanvasStyle: CSSStyleDeclaration}",
        canvasId : "canvas-page-0",
        canvasMrapperId : "canvas-page-0-wrapper",
        defaultObject : "DefaultObjectClass {box: klass, title: klass}",
        index : 0,
        object : [],
        path : "/",
        selectComponent: [],
        zoom: 0.3,
        Prototype : "object"
        };

        var pageArray2 = {
        canvas : "klass {_objects: Array(2), lowerCanvasEl: canvas#canvas-page-0.s-lGOyMSU-CVDD.lower-canvas, _originalCanvasStyle: CSSStyleDeclaration}",
        canvasId : "canvas-page-0",
        canvasMrapperId : "canvas-page-0-wrapper",
        defaultObject : "DefaultObjectClass {box: klass, title: klass}",
        index : 0,
        object : [],
        path : "/",
        selectComponent: [],
        zoom: 0.3,
        Prototype : "object"
        };

        var pageArray3 = {
        canvas : "klass {_objects: Array(2), lowerCanvasEl: canvas#canvas-page-0.s-lGOyMSU-CVDD.lower-canvas, _originalCanvasStyle: CSSStyleDeclaration}",
        canvasId : "canvas-page-0",
        canvasMrapperId : "canvas-page-0-wrapper",
        defaultObject : "DefaultObjectClass {box: klass, title: klass}",
        index : 0,
        object : [],
        path : "/",
        selectComponent: [],
        zoom: 0.3,
        Prototype : "object"
        };

        pageArray_ex[0] = pageArray1
        pageArray_ex[1] = pageArray2
        pageArray_ex[2] = pageArray3

        //pageArray_ex 대신 실제 pageArray 넣기
        let jsonCanvas = new Array(0);
        let jsonCanvasId = new Array(0);
        let jsonCanvasMrapperId = new Array(0);
        let jsonDefaultObject = new Array(0);
        let jsonIndex = new Array(0);
        let jsonObject = new Array(0);
        let jsonPath = new Array(0);
        let jsonSelectComponent = new Array(0);
        let jsonZoom = new Array(0);
        let jsonPrototype = new Array(0);

        for(var i = 0; i < pageArray_ex.length; i++){
            jsonCanvas[i] = JSON.stringify(pageArray_ex[i].canvas);
            jsonCanvasId[i] = JSON.stringify(pageArray_ex[i].canvasId);
            jsonCanvasMrapperId[i] = JSON.stringify(pageArray_ex[i].canvasMrapperId);
            jsonDefaultObject[i] = JSON.stringify(pageArray_ex[i].defaultObject);
            jsonIndex[i] = JSON.stringify(pageArray_ex[i].index);
            jsonObject[i] = JSON.stringify(pageArray_ex[i].object);
            jsonPath[i] = JSON.stringify(pageArray_ex[i].path);
            jsonSelectComponent[i] = JSON.stringify(pageArray_ex[i].selectComponent);
            jsonZoom[i] = JSON.stringify(pageArray_ex[i].zoom);
            jsonPrototype[i] = JSON.stringify(pageArray_ex[i].Prototype);
        }

        // 이건 그대로
        for(var i = 0; i < pageArray_ex.length; i++) {
            db.collection('save').add({
            canvas : jsonCanvas[i],
            canvasId : jsonCanvasId[i],
            canvasMrapperId : jsonCanvasMrapperId[i],
            defaultObject : jsonDefaultObject[i],
            index : jsonIndex[i],
            object : jsonObject[i],
            path : jsonPath[i],
            selectComponent: jsonSelectComponent[i],
            zoom: jsonZoom[i],
            Prototype : jsonPrototype[i]
            })
            .then((result)=>{
            //window.location.href = '/index.html'
            console.log(pageArray_ex)
            })
            .catch((error)=>{
            console.log(err)
            })
        }
  	}

    // 불러오기 누르면 pageArray에 저장
	function recall() {

        let pageArray_ex2 = new Array(0);

    	db.collection('save').get().then((결과)=>{
            결과.forEach((doc)=>{
                let pageArray_fire = doc.data();
                
                for(var i = 0; i < pageArray_fire.length; i++){
                    var pageArray1 = {
                    "canvas" : pageArray_fire[i].canvas,
                    "canvasId" : pageArray_fire[i].canvasId,
                    "canvasMrapperId" : pageArray_fire[i].canvasMrapperId,
                    "defaultObject" : pageArray_fire[i].defaultObject,
                    "index" : pageArray_fire[i].index,
                    "object" : pageArray_fire[i].object,
                    "path" : pageArray_fire[i].path,
                    "selectComponent": pageArray_fire[i].selectComponent,
                    "zoom": pageArray_fire[i].zoom,
                    "Prototype" : pageArray_fire[i].Prototype
                    };
                    
                    pageArray_ex2[i] = JSON.parse(pageArray1);

                    console.log(pageArray_ex2)

                }
                console.log(pageArray_ex2)
          
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