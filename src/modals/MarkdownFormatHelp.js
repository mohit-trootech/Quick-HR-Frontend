/**How to Use Markdown Modal Explaination For Text Formatting Only Not for Images & Links */

const MarkdownFormatHelp = () => {
  return (
    <>
      <dialog id="markdown_help" className="modal bg-opcaity-50">
        <div className="modal-box w-full max-w-3xl border shadow-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Markdown Help!</h3>
          <p className="text-zinc-500 text-xs">
            This text provides a brief guide on how to use Markdown for text
            formatting.
          </p>
          <div className="px-3 my-3 py-5 border">
            <table className="table w-full rounded-xl">
              <thead>
                <tr>
                  <th>Tag</th>
                  <th>Description</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody className="prose">
                <tr>
                  <td>`# Heading 1`</td>
                  <td>Creates a level 1 heading</td>
                  <td>
                    <h1>This My Heading</h1>
                  </td>
                </tr>
                <tr>
                  <td>`## Heading 2`</td>
                  <td>Creates a level 2 heading</td>
                  <td>
                    <h2>My Subheading</h2>
                  </td>
                </tr>
                <tr>
                  <td>`**bold text**`</td>
                  <td>Makes text bold</td>
                  <td>
                    <strong>This is bold text</strong>
                  </td>
                </tr>
                <tr>
                  <td>`*italic text*`</td>
                  <td>Makes text italic</td>
                  <td>
                    <em>This is italic text</em>
                  </td>
                </tr>
                <tr>
                  <td>`~~strikethrough text~~`</td>
                  <td>Creates strikethrough text</td>
                  <td>
                    <strike>This is strikethrough text</strike>
                  </td>
                </tr>
                <tr>
                  <td>`- Unordered list item`</td>
                  <td>Creates an unordered list item</td>
                  <td>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>`1. Ordered list item`</td>
                  <td>Creates an ordered list item</td>
                  <td>
                    <ol>
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td>`` `code` ``</td>
                  <td>Displays code</td>
                  <td>
                    <code>This is code</code>
                  </td>
                </tr>
                <tr>
                  <td>`---`</td>
                  <td>Creates a horizontalrule</td>
                  <td>
                    <hr></hr>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default MarkdownFormatHelp;
