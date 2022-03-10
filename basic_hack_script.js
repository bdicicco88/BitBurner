var addMoney = false;
var successCount = 0;
var serverName = '';
while(true){
    var success = hack(serverName);

    if(success==0)
    {
        weaken(serverName);
    }
    else
    {
        successCount++;
        addMoney = true;
    }
    // Add Money after chain of success
    if(addMoney && successCount> 5)
    {
        grow(serverName);
        successCount=0;
    }
}
