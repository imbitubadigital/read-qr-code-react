
import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react';


export function GeneratePdf() {

//   const html = `<html>
//   <body>
//     <style>
//       .my-heading4 {
//         background: darkgreen;
//         color: white;
//       }
//       pre {
//         background-color: #eee;
//         padding: 10px;
//       }
//     </style>
//     <h1>Heading 1</h1>
//     <h2 style="background-color: pink">Heading 2</h2>
//     <h3>Heading 3</h3>
//     <h4 class="my-heading4">Heading 4</h4>
//     <p>
//       Paragraph with <strong>bold</strong>, <i>italic</i>, <u>underline</u>,
//       <s>strikethrough</s>,
//       <strong><u><s><i>and all of the above</i></s></u></strong>
//     </p>

//     <hr />
//     <ul>
//       <li>Unordered item</li>
//       <li>Unordered item</li>
//     </ul>
//     <ol>
//       <li>Ordered item</li>
//       <li>Ordered item</li>
//     </ol>
//     <br /><br /><br /><br /><br />
//     Text outside of any tags
//     <table>
//       <thead>
//         <tr>
//           <th>Column 1</th>
//           <th>Column 2</th>
//           <th>Column 3</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Foo</td>
//           <td>Bar</td>
//           <td>Foobar</td>
//         </tr>
//         <tr>
//           <td colspan="2">Foo</td>
//           <td>Bar</td>
//         </tr>
//         <tr>
//           <td>Some longer thing</td>
//           <td>Even more content than before!</td>
//           <td>Even more content than before!</td>
//         </tr>
//       </tbody>
//     </table>
//     <div style="width: 200px; height: 200px; background: pink"></div>

//   </body>
// </html>
// `;

  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}