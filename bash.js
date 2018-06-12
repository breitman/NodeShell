
process.stdout.write('prompt > ');
process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    const pwd = require('./pwd.js');
    const ls = require('./ls.js');
    if(cmd === 'pwd'){
        pwd();
    }
    else if(cmd === 'ls'){
        ls();
    } else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }
});
