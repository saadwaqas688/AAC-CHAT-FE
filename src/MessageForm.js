import React, { useState } from 'react';

function MessageForm() {
  const [formData, setFormData] = useState({
    userId: 'user123',
    messageId: 'message456',
    isRead: true,
    text: 'Hello, how are you?',
    media: ['mediaUrl1', 'mediaUrl2'],
    reaction: 'thumbsUp',
    parentMessage: 'parent123',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to send the message with formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="messageId">Message ID:</label>
        <input
          type="text"
          id="messageId"
          name="messageId"
          value={formData.messageId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="isRead">Is Read:</label>
        <input
          type="checkbox"
          id="isRead"
          name="isRead"
          checked={formData.isRead}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="media">Media URLs:</label>
        <input
          type="text"
          id="media"
          name="media"
          value={formData.media.join(', ')}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="reaction">Reaction:</label>
        <input
          type="text"
          id="reaction"
          name="reaction"
          value={formData.reaction}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="parentMessage">Parent Message:</label>
        <input
          type="text"
          id="parentMessage"
          name="parentMessage"
          value={formData.parentMessage}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default MessageForm;
