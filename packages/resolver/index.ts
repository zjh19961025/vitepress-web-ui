import type { ComponentResolveResult, ComponentResolver } from 'unplugin-vue-components/types';

function getHua5Resolved(name: string): ComponentResolveResult {
  return {
    name,
    from: '@hua5/hua-web-ui'
  };
};

export const Hua5UIResolver = (): ComponentResolver => {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Hua')) {
        return getHua5Resolved(name);
      }
    }
  };
};
