let login = prompt("who's there?", '')
if (login === 'Admin')
{
    let password = prompt('password', '')
    if(password == 'TheMaster')
    {
        alert('Welcome')
    }
    else if(password != '' && password != null)
    {
        alert('Wrong password')
    }
    else
    {
        alert('canceld')
    }

}
else if(login != null && login != '')
{
    alert('I don\'t know')

}
else
{
    alert('cancelled')
}