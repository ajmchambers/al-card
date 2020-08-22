import { Component, h } from '@stencil/core';

@Component({
  tag: 'al-card',
  styleUrl: 'al-card.scss',
  shadow: true,
})
export class AlCard {
  render() {
    return (
      <div class="card">
        <div class="card__side card__side--front">
          <slot name="front" />
        </div>
        <div class="card__side card__side--back">
          <slot name="back" />
        </div>
      </div>
    );
  }
}
