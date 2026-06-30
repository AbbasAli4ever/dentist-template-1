import type * as React from 'react'
import type { ThreeElements } from '@react-three/fiber'

// React 19's @types/react removed the global `JSX` namespace (it now lives at
// `React.JSX`). The anima-generated sections annotate return types as
// `JSX.Element`, so we re-expose the global namespace here and fold in
// react-three-fiber's intrinsic elements (<mesh>, <group>, …) at the same time.
declare global {
  namespace JSX {
    type ElementType = React.JSX.ElementType
    type Element = React.JSX.Element
    type ElementClass = React.JSX.ElementClass
    type ElementAttributesProperty = React.JSX.ElementAttributesProperty
    type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>
    type IntrinsicAttributes = React.JSX.IntrinsicAttributes
    type IntrinsicClassAttributes<T> = React.JSX.IntrinsicClassAttributes<T>
    interface IntrinsicElements extends React.JSX.IntrinsicElements, ThreeElements {}
  }
}
