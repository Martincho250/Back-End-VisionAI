import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { buscarMarcador } from "./marcadoresService.js";

const server = new McpServer({ name: "visionai-backend", version: "1.0.0" });

server.tool(
  "get_node_by_marker",
  { marker_id: z.string() },
  async ({ marker_id }) => {
    const marcador = await buscarMarcador(marker_id);
    if (!marcador) {
      return { isError: true, content: [{ type: "text", text: "Marcador no encontrado" }] };
    }
    return { content: [{ type: "text", text: JSON.stringify(marcador) }] };
  }
);

await server.connect(new StdioServerTransport());