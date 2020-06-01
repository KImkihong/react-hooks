import React, { useState,useEffect } from 'react';

const Info =()=>{
    const[name,setName]=useState('');
    const[nickname,setNickname]=useState('');
    const onChangeName=(e)=>{
        setName(e.target.value);
    }

    useEffect(()=>{
        console.log("랜더링 됨");
        console.log(name,nickname);
    })

    const onChangeNicName=(e)=>{
        setNickname(e.target.value);
    }
    return(
        <div>
            <h4>이름을 입력해 주세요</h4>
            <input type="text" value={name} onChange={onChangeName}/>
            <h4>닉네임을 입력해 주세요</h4>
            <input type="text" value={nickname} onChange={onChangeNicName}/>
            <hr/>
            <h2>입력한 이름과 닉네임 출력</h2>
            <b>이름:{name}</b><br/>
            <b>닉네임:{nickname}</b>
        </div>
    )
}

export default Info;