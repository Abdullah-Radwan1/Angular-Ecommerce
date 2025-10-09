// src/app/services/toast.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private container: HTMLElement | null = null;

  constructor() {
    this.container = document.getElementById('toast-container');
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'success') {
    if (!this.container) return;

    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.innerHTML = `<span>${message}</span>`;
    this.container.appendChild(div);

    // Remove automatically after 3 seconds
    setTimeout(() => {
      div.remove();
    }, 2000);
  }
}
