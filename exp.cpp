/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <bits/stdc++.h>

using namespace std;

vector<int> generateNextPalindrome(int num[], int n) {
	    // code here
	    vector<int> ans;
	    for(int i = 0 ; i < n ; i++)
	        ans.push_back(num[i]);
	   // for(int i = 0 ; i < n ; i++)
	   //     cout<<ans[i];
	   // cout<<endl;
	    int i = n/2 , j = n/2 , cnt = n/2;
	    
	    if(!(n%2))
	        i--;
	    cout<<i<<' '<<j<<endl;
	    int flag = 0;
	    while(i >= 0){
	        if(i != j && num[i] < num[j])
	        {
	            flag++;
	            cout<<i<<' '<<j<<' ';
	        }
	        ans[j] = num[i];
	        i--;
	        j++;
	    }
	    cout<<flag<<endl;
	    
    // 	long long int m = 0;
    // 	while(m<n){
    // 	    gvn = gvn*10 + num[m];
    // 	    plndrm = plndrm*10 + ans[m];
    // 	    m++;
    // 	}
    // 	cout<<gvn<<endl;
    // 	cout<<plndrm<<endl;
    	if(flag){
    	    while(cnt && num[cnt] == 9){
    	        ans[cnt] = 0;
    	        ans[n-1-cnt] = 0;
    	  
	            cnt--;
    	    }
    	    ans[cnt]++;
    	    if(cnt != n-1-cnt)
    	        ans[n-1-cnt]++;
    	}
    	return ans;
	    
	}

int main()
{
    // cout<<"Hello World";
    int num[6] = {6,6,6,6,6,2};
    vector<int> ans = generateNextPalindrome(num,6);
    for(int i=0 ; i<ans.size() ; i++){
        cout<<ans[i]<<" ";
    }

    return 0;
}
