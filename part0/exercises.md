## 0.4: New note diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enter note & click submit
    Browser->>Server: POST /exampleapp/new_note
    Server-->>Browser: 302 Redirect (/notes)
    Note over Browser: Browser reloads Notes page

    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: HTML Document

    par Load Assets Again
      Browser->>Server: GET /exampleapp/main.css
      Server-->>Browser: CSS File
      Browser->>Server: GET /exampleapp/main.js
      Server-->>Browser: JavaScript File
    end

    Note over Browser: JS fetches notes data
    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: JSON Data (notes list)
    Note over Browser: Callback: Render ul

```

## 0.5: Single page app diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enter website
    Browser->>Server: GET /exampleapp/spa
    Server-->>Browser: HTML Document (200 OK)

    par Load Assets
      Browser->>Server: GET /exampleapp/main.css
      Server-->>Browser: CSS File (200 OK)
      Browser->>Server: GET /exampleapp/main.js
      Server-->>Browser: JavaScript File (200 OK)
    end

    Note over Browser: Initialize SPA

    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: JSON Data (200 OK)
    Note over Browser: onreadystatechange: Render notes list

```


## 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enter note & click submit
    par UI Update (Optimistic)
        Note over Browser: Redraw notes immediately
    and Server Communication
        Browser->>Server: POST /new_note_spa (JSON)
        Server-->>Browser: 201 Created (confirmation)
    end
```