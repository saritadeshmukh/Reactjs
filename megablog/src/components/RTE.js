import React from 'react'
import {Editor} from 'tinymce'
import {Controller} from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=""}) {

  return (
  <div className='w-full'>
      
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
   
   <Controller
    name={ name|| "Content"}
    control={control}
    render ={({field:{onChange}})=> (
      <Editor
         initialValue={defaultValue}
         init={{
          initialValue:defaultValue,
          height: 500,
          menubar:false,
          plugins:['print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable'],
          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
          }}
          //any changes on Editor ,reply on change
         onEditorChange={onChange}/>
    )}
    />
  </div>
  )
}

