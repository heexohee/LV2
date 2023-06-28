const Button =({clickAddButtonHandler, children})=>{ //구조 분해 할당으로 가져옴.(???)
    return  <button className = 'add-button' onClick={ clickAddButtonHandler}>{children}</button>
    };
    
    export default Button;
    //함수형 컴포넌트 추가 버튼 만들기

// const Button =(props)=>{ 
//   const {clickAddButtonHandler, children} = props
