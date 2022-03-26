const inputData=document.querySelector('#input')
const add=document.querySelector('#add')
const wrapper_content=document.getElementById('wrapper_content')
const delete_btn=document.getElementById('delete')

add.addEventListener('click',(e)=>{
    e.preventDefault()
    if(inputData.value!=''){
    const item=document.createElement('div')
    item.className='edit'
    item.innerHTML=`<h4>${inputData.value}</h4>
    <div class="edit_btn" id="edit_btn">
    <button class="saving_btn btn_delete" id="delete">Delete</button>
    <button class="saving_btn btn_edit" id="edit">Edit</button>
    </div>`
   
    wrapper_content.appendChild(item)
    inputData.value=''
    console.log(item)
    }
    else{
        console.error('enter the input data')
    }

    
    // wrapper_content.appendChild()
})
// console.log(inputData,add,wrapper_content)


wrapper_content.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn_delete')){
        const div_target=e.target.parentElement.parentElement
        wrapper_content.removeChild(div_target)
        // console.log(wrapper_content)
        
    }
    if(e.target.classList.contains('btn_edit')){
        const div_target=e.target.parentElement.parentElement
        const target_value=e.target.parentElement.parentElement.children[0].textContent
        const edit_div=document.createElement('div')
        edit_div.className='edit text_css'
        edit_div.innerHTML=`<textarea name="edittodo" id="edittodo"  placeholder="${target_value}" ></textarea>
            <div class="btn" id="save_btn">
                <button class="saving_btn cancle_btn" id="cancle">cancle</button>
                <button class="saving_btn save_btn" id="save">Save</button>
            </div>`
        wrapper_content.replaceChild(edit_div,div_target)
        const textvalue=document.getElementById('edittodo')
        textvalue.value=target_value
        const childrenitems=wrapper_content.children
        for(let i=0;i<childrenitems.length;i++){
            if(childrenitems[i].classList.contains('text_css')){
                childrenitems[i].style.display='flex'
                console.log(childrenitems[i])
            }
            else{
                childrenitems[i].style.display='none'
            }
        }
        // console.log(childrenitems)

    }
    if(e.target.classList.contains('cancle_btn')){
    const edit_div=e.target.parentElement.parentElement
    const h4value=e.target.parentElement.parentElement.children[0].placeholder
    const item=document.createElement('div')
    item.className='edit'
    item.innerHTML=`<h4>${h4value}</h4>
    <div class="edit_btn" id="edit_btn">
    <button class="saving_btn btn_delete" id="delete">Delete</button>
    <button class="saving_btn btn_edit" id="edit">Edit</button>
    </div>`
    wrapper_content.replaceChild(item,edit_div)
    const childrenitems=wrapper_content.children
        for(let i=0;i<childrenitems.length;i++){
            childrenitems[i].style.display='flex'
        }





    }
    if(e.target.classList.contains('save_btn')){
        const edit_div=e.target.parentElement.parentElement
        const h4value=e.target.parentElement.parentElement.children[0].value
        if(h4value.trim()!==''){
            const item=document.createElement('div')
            item.className='edit'
            item.innerHTML=`<h4>${h4value}</h4>
            <div class="edit_btn" id="edit_btn">
            <button class="saving_btn btn_delete" id="delete">Delete</button>
            <button class="saving_btn btn_edit" id="edit">Edit</button>
            </div>`
            wrapper_content.replaceChild(item,edit_div)
            const childrenitems=wrapper_content.children
                for(let i=0;i<childrenitems.length;i++){
                    childrenitems[i].style.display='flex'
                }
            }
        }
        else{
            console.error('enter a value')
        }
})