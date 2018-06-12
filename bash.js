
process.stdout.write('prompt > ');
process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    const pwd = require('./pwd.js')
    if(cmd === 'pwd'){
        pwd();
    } else{    
    process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});