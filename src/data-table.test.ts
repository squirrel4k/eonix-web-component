import { beforeEach, describe, expect, it } from 'vitest';

import './data-table';

describe('Data table', async () => {
  beforeEach(async () => {
    document.body.innerHTML = '<eonix-data-table></eonix-data-table>';
  });

  it('should have a div inside', async () => {
    const component = document.querySelector('eonix-data-table')!;
    const div = component.querySelector('div');

    expect(div).not.toBeNull();
  });
});
