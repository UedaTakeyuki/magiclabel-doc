---
title: How it workds
prev: /guide/
next: basic-usage
sidebarDepth: 3
posted: 2020-04-10
---
# How it workds
The basic feature of Magic Label™ is implemented as a  backend cloud application.
Magic Label™ is the Pre-printed QR code label sticker whose URL links to a special server with a unique id.
When you read Magic Label™, the unique ID is sent to the server.
The server checks the internal DataBase with the id and leads you to the URL registration page in case the URL is still not registered, on the contrary, it leads you to the registered URL in case the URL is registered.

<mermaid/>
<div class="mermaid">
graph TD
    id1([Read Magic Label]) -->|ID|id2{URL registered?} -->|yes|id4([go to the URL])
    id2 -->|no|id5([URL registration page])
</div>
