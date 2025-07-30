import React from 'react'

const Message = () => {
  return (
    <div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
                </div>
            </div>
            <div className="chat-header text-gray-950">
                Obi-Wan Kenobi
                <time className="text-xs text-gray-950">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer text-gray-950">Delivered</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                />
                </div>
            </div>
            <div className="chat-header text-gray-950">
                Anakin
                <time className="text-xs text-gray-950">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer text-gray-950">Seen at 12:46</div>
        </div>
    </div>
  )
}

export default Message