import React, { FC, useRef } from 'react';

const UncontrolledForm: FC = () => {
  const inputs = useRef<Record<string, HTMLInputElement | null>>({});

  const getRefs = (element: HTMLInputElement | null, id: string) => {
    inputs.current[id] = element;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resultRefs = Object.values(inputs.current).reduce(
      (data: Record<string, string>, element) => {
        if (element) {
          data[element.name] = element.value;
        }

        return data;
      },
      {},
    );

    const resultForm = [...(e.target as any)?.elements].reduce((data, element) => {
      if (element.type === 'text') {
        data[element.name] = element.value;
      }

      return data;
    }, {});

    console.log({ resultRefs, resultForm });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name</p>
        <input ref={(element) => getRefs(element, 'name')} type="text" name="name" />
      </label>

      <label>
        <p>Phone</p>
        <input ref={(element) => getRefs(element, 'phone')} type="text" name="phone" />
      </label>

      <button type="submit">Submit form</button>
    </form>
  );
};

export default UncontrolledForm;
