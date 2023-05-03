for(let i=0;i<n;i++){
    
    for(let j=0;j<n-i;j++){
        string+='*';
    }
     for(let j=0;j<2*i;j++){

        string+=' '
    }
     for(let j=0;j<n-i;j++){
        string+='*';
    }
    string+='\n';
}