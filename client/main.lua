Citizen.CreateThread(function()
    -- MAIN THREAD
end)

RegisterNetEvent("Ef:Notify",function(type,text)
    show(type,text)
end)

function show(type,text)
    SendNUIMessage({
        action = 'show',
        type = type,
        text = text
        -- Add any additional data you want to pass to the NUI
    })
    Wait(5000)
    SendNUIMessage({
        action = 'hide',
    })
end



function Hide()
    SendNuiMessage({
        action="hide"
    })
end