Initial performance profiling results/After updating the App with React.memo and useMemo

  User action: Region change;
  
  Performance parameters:

  - 1st render
    Commit Duration: 2.3s before / 1.8s after
    
    Render Duration: 9.3ms before / 7.4 ms after
    
    Flame Graph:
    
  Before-
    
<img width="960" alt="chrome_pLpIo7eu7e" src="https://github.com/user-attachments/assets/353b029f-ddd6-4425-8234-c04413bbb260" />

  After-
    
<img width="960" alt="chrome_PNFyYjuoPk" src="https://github.com/user-attachments/assets/8622570f-7a1a-4dbe-830f-69e2cc9f1a1c" />


  Ranked Chart: 
  
  Before-
    
<img width="960" alt="chrome_K3ZwD1XkMC" src="https://github.com/user-attachments/assets/42f1e7a2-e448-4939-a035-b4876eae8ed9" />

  After-
  
<img width="960" alt="chrome_8s2iIuj1i4" src="https://github.com/user-attachments/assets/5d20cfa8-0514-4081-b9ee-323b03b45f00" />
    
Timeline: 

  Before-
  
<img width="960" alt="chrome_EPMumLW59i" src="https://github.com/user-attachments/assets/4b2d2f5c-3989-4369-b06c-367ea2dbbb18" />

  After-
  
<img width="960" alt="chrome_LzZrCpGqLj" src="https://github.com/user-attachments/assets/02d1e5bb-73c5-47cb-ad7f-766d74f7ceaa" />


  - 2nd render
    Commit Duration: 2.3s before / 1.8s after
    
    Render Duration: 6.4ms before / 7.5ms after
    
    Flame Graph: 

    Before-

<img width="960" alt="chrome_9vBZXlok8F" src="https://github.com/user-attachments/assets/9d1eb0d2-2826-4ec3-aa81-e8484ae7ac8e" />

  After-
  
<img width="960" alt="chrome_T3u6Bp0x5b" src="https://github.com/user-attachments/assets/ce2eee4e-1d41-4d50-9de1-706b2962f6fe" />

  
   Ranked Chart: 

   Before-

<img width="960" alt="chrome_ksZAsQ1HwK" src="https://github.com/user-attachments/assets/06eed596-3048-4a15-b141-9b17cc78a676" />

  After-
  
<img width="960" alt="chrome_pckjvDzEgV" src="https://github.com/user-attachments/assets/c761a1ba-a454-4a58-a1a0-567813737472" />

  Timeline: 

  Before-
        
<img width="960" alt="chrome_xOWnVz0rD9" src="https://github.com/user-attachments/assets/fcb46658-e06e-43a7-a940-eccc1fe26403" />

After-

<img width="960" alt="chrome_ykx3sr5zRU" src="https://github.com/user-attachments/assets/c0190ac3-634a-4b81-9c9f-2eed1f4610d0" />

  - 3nd render
    Commit Duration: 2.3s before / 1.9s after
    
    Render Duration: 1.9ms / 2.3 ms
    
    Flame Graph: 

    Before-

<img width="960" alt="chrome_ulknELmWwR" src="https://github.com/user-attachments/assets/e236d73e-2401-4ed2-95bb-2c0e9fffe94b" />

  After-
  
<img width="960" alt="chrome_M17ikgWSEs" src="https://github.com/user-attachments/assets/b81a1bca-b342-4ca6-ab4f-250a04da497c" />
        
 Ranked Chart:

 Before-
 
<img width="960" alt="chrome_xtsQhIXzFh" src="https://github.com/user-attachments/assets/3ae5c916-01ea-425c-acd1-e07c61202d4a" />

After-

<img width="960" alt="chrome_DjwKbynvT0" src="https://github.com/user-attachments/assets/d3f8a6dd-8ec5-413e-bec3-8c07e082fb3e" />

        
  Timeline: 

  Before-

<img width="960" alt="chrome_EBORS6XNkF" src="https://github.com/user-attachments/assets/a1c9c190-0ba7-484c-b02d-208b41ab5ccd" />

  After-

<img width="960" alt="chrome_C9lknTi7K4" src="https://github.com/user-attachments/assets/7cfe20df-6086-47ce-a712-13618da5fa79" />


  User action: Search country;
  
  Performance parameters:

  Commit Duration: 3s before / 3.2s after
  
  Render Duration: 7.2ms before / 4.4ms after
  
  Flame Graph: 

  Before-

https://github.com/user-attachments/assets/6289d80d-5742-4a48-a9ff-2e4071605139

  After-

https://github.com/user-attachments/assets/5218b428-b14a-4ccd-9b77-8e964bfded75

  Ranked Chart: 

  Before-

https://github.com/user-attachments/assets/1fed5cf5-af11-44c8-9942-67161111a0a6

  After-

https://github.com/user-attachments/assets/b49a1137-7ea7-4b7d-b338-785b73cac732

  Timeline: 

  Before-
  
<img width="960" alt="chrome_EBORS6XNkF" src="https://github.com/user-attachments/assets/f931117b-e036-48fc-a8c5-a9ca0bd617a8" />

  After-
  
<img width="960" alt="chrome_kRN97H25Ek" src="https://github.com/user-attachments/assets/b8c2f55d-7b11-45f0-b105-30ed357fb2e9" />

  User action: Sort countries by name;
  
  Performance parameters:

  Commit Duration: 1.5s before / 1.4s after
  
  Render Duration: 7.6ms before / 6.4ms after
  
  Flame Graph: 

  Before-
  
<img width="960" alt="chrome_3bRgcgETIR" src="https://github.com/user-attachments/assets/fc0769ff-f1bf-4ad2-aecd-d14cc4b19454" />

  After-
  
<img width="960" alt="chrome_dpJfuOZil0" src="https://github.com/user-attachments/assets/fb8ab33e-c838-45d2-a6f5-32774f8b3281" />

  Ranked Chart: 

  Before-
  
<img width="960" alt="chrome_Fk6nPnmWQL" src="https://github.com/user-attachments/assets/9420b647-d3d2-405e-8198-85989c5f6063" />

  After-
  
<img width="960" alt="chrome_oh7WjcavYv" src="https://github.com/user-attachments/assets/a9d066cb-3467-4d97-9e9e-d8e4cd26c525" />

  Timeline: 

  Before-
  
<img width="960" alt="chrome_dqk9MKj0U3" src="https://github.com/user-attachments/assets/7a81c7ea-5ccb-43f5-b509-00110651469d" />

  After-

<img width="960" alt="chrome_U6laZ6levt" src="https://github.com/user-attachments/assets/64dcca1c-a3b7-42e2-ae1c-1987e8614d5f" />
  

  
