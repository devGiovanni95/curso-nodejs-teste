import { describe, expect, it } from "@jest/globals";
import LivrosImagensService from '../../services/livrosImagensService'

const livrosImagensService = new LivrosImagensService();

describe('Testando livrosImagensService.cadastrarImagem', () => {
    it('O sistema deve salvar uma imagem vinculada ao livro caso todos os dados estejam corretos', async () => {
        const imagemMock = {
            file: {
                originalname: 'curso node.png',
                mimetype: 'imagem/png',
                size: 2857, 
                buffer: {
                    "type": "Buffer",
                    "data": [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 1, 192, 0, 0, 1, 46, 8, 2, 0, 0, 0, 150, 9, 85, 214, 0, 0, 0, 1, 115, 82, 71, 66, 0, 174, 206, 28, 233, 0, 0, 0, 4, 103, 65, 77, 65, 0, 0, 177, 143, 11, 252, 97, 5, 0, 0, 0, 9, 112, 72, 89, 115, 0, 0, 14, 195, 0, 0, 14, 195, 1, 199, 111, 168, 100, 0, 0, 10, 190, 73, 68, 65, 84, 120, 94, 237, 221, 237, 121, 155, 58, 0, 134, 225, 206, 229, 129, 178, 73, 255, 119, 140, 51, 65, 150, 201, 48, 61, 216, 33, 177, 65, 2, 196, 107, 146, 20, 184, 239, 127, 189, 130, 65, 8, 233, 201, 71, 221, 230, 215, 95, 0, 34, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 244, 116, 254, 251, 239, 191, 223, 191, 127, 247, 127, 0, 158, 32, 160, 167, 211, 213, 243, 215, 47, 207, 29, 54, 96, 35, 1, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 63, 239, 245, 207, 229, 215, 131, 203, 203, 159, 183, 254, 35, 132, 76, 233, 247, 16, 80, 126, 220, 219, 112, 179, 119, 94, 94, 251, 15, 145, 49, 165, 223, 228, 228, 1, 125, 123, 123, 253, 243, 242, 114, 185, 12, 63, 91, 95, 186, 207, 215, 127, 94, 125, 198, 254, 46, 118, 251, 230, 76, 233, 55, 57, 107, 64, 175, 225, 28, 47, 177, 82, 23, 82, 29, 253, 122, 118, 251, 230, 76, 233, 55, 57, 99, 64, 223, 94, 27, 218, 121, 119, 241, 211, 163, 47, 102, 183, 111, 206, 148, 126, 147, 211, 5, 180, 92, 89, 13, 44, 190, 47, 101, 183, 111, 206, 148, 126, 147, 115, 5, 52, 170, 103, 199, 226, 251, 82, 118, 251, 230, 76, 233, 55, 57, 83, 64, 95, 95, 250, 181, 52, 118, 251, 81, 231, 253, 251, 244, 183, 183, 235, 55, 249, 143, 11, 208, 119, 241, 95, 202, 110, 223, 156, 41, 253, 38, 231, 9, 232, 196, 87, 159, 51, 109, 188, 255, 172, 212, 226, 251, 82, 118, 251, 230, 76, 233, 55, 57, 77, 64, 171, 95, 126, 46, 127, 101, 121, 139, 232, 15, 124, 1, 58, 120, 151, 192, 229, 165, 254, 94, 128, 254, 61, 88, 253, 81, 87, 183, 119, 96, 53, 191, 113, 224, 246, 38, 174, 238, 37, 131, 189, 118, 253, 243, 240, 43, 242, 45, 244, 151, 234, 175, 209, 233, 46, 242, 121, 141, 100, 183, 151, 247, 254, 113, 243, 95, 248, 172, 70, 55, 209, 95, 176, 255, 96, 155, 237, 230, 252, 24, 83, 186, 119, 39, 9, 104, 245, 203, 207, 172, 139, 221, 169, 30, 207, 117, 153, 57, 203, 232, 111, 251, 187, 181, 88, 28, 58, 24, 216, 71, 40, 43, 163, 29, 45, 255, 219, 222, 233, 63, 84, 181, 112, 111, 109, 111, 68, 152, 10, 247, 58, 115, 215, 122, 159, 146, 117, 187, 125, 121, 236, 181, 137, 110, 54, 28, 204, 231, 60, 206, 222, 69, 211, 229, 54, 156, 243, 157, 77, 233, 145, 157, 35, 160, 149, 34, 181, 124, 74, 174, 42, 190, 148, 157, 220, 62, 45, 139, 120, 116, 182, 235, 1, 213, 175, 149, 7, 175, 156, 252, 97, 238, 192, 212, 253, 181, 109, 228, 15, 221, 134, 238, 95, 151, 89, 30, 107, 183, 55, 219, 119, 123, 243, 216, 227, 113, 87, 158, 72, 195, 85, 55, 249, 132, 245, 97, 97, 236, 187, 155, 210, 35, 59, 69, 64, 183, 236, 103, 185, 124, 183, 13, 232, 196, 238, 184, 191, 178, 122, 51, 53, 245, 113, 45, 239, 190, 66, 219, 23, 88, 53, 205, 99, 29, 171, 63, 156, 149, 167, 203, 198, 93, 60, 145, 198, 171, 206, 92, 109, 203, 57, 223, 227, 148, 30, 217, 41, 2, 90, 91, 192, 105, 63, 203, 147, 173, 88, 235, 139, 1, 157, 244, 249, 202, 246, 205, 88, 25, 87, 186, 251, 178, 125, 19, 239, 245, 250, 211, 9, 78, 151, 140, 59, 168, 93, 111, 147, 68, 125, 170, 142, 125, 159, 83, 122, 100, 103, 8, 104, 109, 75, 228, 235, 224, 103, 3, 90, 30, 127, 121, 252, 107, 140, 199, 159, 141, 150, 227, 170, 94, 236, 250, 67, 183, 207, 3, 175, 127, 49, 81, 221, 83, 245, 56, 204, 154, 188, 90, 255, 241, 185, 111, 107, 203, 203, 213, 246, 250, 112, 232, 213, 145, 175, 31, 247, 244, 19, 185, 207, 244, 196, 44, 213, 46, 182, 233, 156, 239, 116, 74, 143, 236, 172, 1, 205, 87, 65, 113, 182, 175, 9, 232, 125, 91, 116, 203, 248, 190, 115, 199, 167, 172, 222, 71, 247, 138, 151, 235, 95, 201, 246, 127, 236, 213, 246, 203, 125, 239, 61, 170, 13, 106, 245, 103, 156, 166, 89, 175, 141, 233, 170, 225, 192, 234, 128, 202, 139, 86, 39, 104, 78, 253, 137, 148, 87, 171, 12, 189, 233, 160, 39, 230, 124, 175, 83, 122, 100, 39, 8, 104, 109, 69, 85, 151, 74, 155, 98, 65, 77, 158, 171, 188, 112, 185, 244, 90, 183, 107, 175, 56, 101, 251, 141, 84, 166, 97, 122, 39, 84, 134, 181, 114, 219, 52, 159, 161, 246, 120, 138, 67, 91, 166, 242, 230, 137, 9, 234, 85, 6, 94, 63, 71, 195, 132, 110, 59, 231, 187, 157, 210, 35, 19, 208, 181, 138, 101, 60, 121, 174, 150, 37, 90, 217, 20, 83, 11, 249, 166, 60, 254, 225, 59, 184, 57, 149, 89, 152, 187, 206, 202, 195, 11, 171, 94, 95, 222, 212, 232, 216, 150, 153, 236, 21, 231, 90, 53, 236, 206, 51, 207, 119, 116, 232, 182, 115, 190, 223, 41, 61, 50, 1, 93, 235, 153, 13, 86, 174, 188, 197, 133, 62, 82, 187, 153, 206, 224, 71, 87, 85, 107, 47, 84, 30, 191, 106, 206, 86, 189, 124, 113, 162, 218, 231, 188, 60, 215, 218, 71, 221, 126, 173, 114, 216, 163, 67, 183, 157, 243, 253, 78, 233, 145, 9, 232, 90, 207, 108, 176, 114, 255, 172, 88, 199, 189, 114, 31, 221, 93, 38, 255, 97, 204, 226, 102, 31, 91, 253, 130, 129, 202, 156, 207, 180, 99, 105, 162, 42, 103, 107, 183, 246, 81, 63, 243, 124, 135, 135, 174, 158, 194, 217, 23, 84, 38, 97, 47, 83, 122, 100, 39, 13, 232, 220, 218, 91, 240, 211, 1, 93, 94, 251, 181, 127, 53, 210, 50, 150, 161, 50, 212, 43, 230, 172, 188, 220, 220, 125, 45, 13, 110, 241, 142, 231, 172, 221, 237, 95, 25, 208, 103, 230, 124, 199, 83, 122, 100, 39, 8, 104, 101, 89, 174, 138, 193, 200, 51, 27, 172, 188, 106, 251, 217, 30, 53, 44, 255, 209, 79, 70, 231, 182, 102, 221, 250, 87, 60, 216, 118, 183, 215, 30, 96, 179, 181, 187, 253, 153, 231, 59, 60, 116, 219, 57, 223, 241, 148, 30, 217, 25, 2, 90, 46, 166, 103, 214, 192, 51, 27, 172, 220, 64, 237, 103, 27, 187, 190, 231, 175, 188, 175, 7, 131, 51, 109, 176, 153, 215, 76, 217, 63, 179, 219, 139, 55, 115, 45, 122, 230, 249, 14, 15, 221, 118, 206, 119, 60, 165, 71, 118, 134, 128, 86, 87, 203, 220, 234, 155, 245, 204, 6, 43, 151, 94, 251, 217, 234, 110, 111, 249, 236, 95, 90, 136, 183, 95, 103, 245, 11, 6, 182, 221, 237, 45, 19, 185, 153, 103, 158, 239, 240, 208, 213, 83, 56, 251, 130, 117, 103, 91, 154, 178, 165, 143, 211, 232, 20, 1, 45, 87, 75, 103, 97, 49, 79, 250, 183, 2, 218, 155, 232, 232, 253, 100, 149, 41, 152, 223, 49, 197, 192, 214, 237, 176, 85, 47, 95, 191, 219, 211, 135, 215, 224, 43, 3, 250, 212, 156, 239, 119, 74, 143, 236, 20, 1, 173, 45, 229, 206, 252, 106, 158, 210, 188, 193, 154, 246, 79, 251, 118, 93, 54, 123, 193, 114, 251, 205, 94, 105, 229, 225, 133, 166, 155, 239, 45, 31, 187, 170, 29, 79, 106, 127, 34, 229, 184, 71, 135, 110, 59, 231, 251, 157, 210, 35, 59, 71, 64, 107, 11, 234, 42, 89, 51, 141, 187, 162, 60, 172, 83, 94, 175, 56, 108, 118, 139, 45, 41, 206, 246, 112, 193, 202, 128, 166, 111, 191, 241, 38, 103, 52, 95, 174, 250, 104, 70, 135, 86, 142, 121, 106, 158, 230, 180, 63, 145, 114, 84, 227, 67, 183, 157, 243, 221, 78, 233, 145, 157, 36, 160, 213, 213, 119, 51, 255, 239, 120, 250, 111, 141, 31, 23, 95, 203, 202, 171, 174, 224, 78, 185, 222, 219, 183, 235, 187, 235, 241, 147, 255, 246, 168, 184, 236, 227, 201, 90, 118, 213, 187, 183, 202, 92, 173, 222, 92, 181, 203, 149, 39, 105, 157, 168, 182, 179, 109, 162, 253, 137, 148, 131, 26, 31, 186, 237, 156, 239, 118, 74, 143, 236, 52, 1, 157, 92, 88, 157, 219, 251, 207, 31, 151, 206, 245, 215, 202, 61, 254, 80, 113, 176, 176, 42, 75, 253, 122, 196, 71, 212, 214, 253, 143, 56, 237, 219, 245, 230, 126, 19, 227, 223, 181, 240, 246, 86, 249, 41, 232, 240, 122, 245, 129, 15, 78, 211, 221, 119, 117, 244, 213, 77, 63, 175, 62, 223, 15, 243, 84, 27, 240, 135, 226, 122, 19, 103, 43, 127, 223, 196, 245, 209, 189, 118, 15, 239, 253, 220, 193, 184, 183, 12, 232, 198, 115, 190, 215, 41, 61, 178, 243, 4, 180, 83, 93, 205, 45, 134, 27, 35, 62, 77, 101, 241, 181, 111, 215, 155, 250, 162, 159, 50, 190, 220, 186, 87, 223, 205, 143, 105, 82, 62, 79, 181, 93, 26, 157, 45, 24, 121, 251, 19, 105, 9, 232, 198, 115, 190, 207, 41, 61, 178, 83, 5, 52, 94, 206, 163, 69, 211, 120, 150, 238, 85, 163, 37, 250, 173, 1, 173, 157, 41, 185, 255, 202, 206, 107, 212, 126, 181, 151, 151, 165, 137, 234, 4, 251, 61, 216, 237, 237, 79, 164, 188, 189, 234, 161, 155, 206, 249, 46, 167, 244, 200, 78, 22, 208, 206, 220, 183, 216, 83, 138, 197, 183, 188, 142, 223, 215, 217, 214, 1, 109, 95, 241, 27, 108, 193, 78, 227, 127, 245, 52, 173, 97, 188, 183, 55, 102, 47, 78, 212, 187, 181, 207, 46, 216, 237, 237, 79, 164, 49, 160, 157, 77, 231, 124, 127, 83, 122, 100, 231, 11, 232, 213, 236, 219, 207, 135, 110, 191, 43, 182, 127, 217, 192, 204, 166, 184, 191, 100, 120, 80, 101, 237, 117, 7, 12, 142, 184, 252, 153, 10, 95, 175, 161, 255, 151, 165, 223, 160, 216, 118, 251, 75, 27, 185, 213, 92, 61, 62, 175, 177, 56, 81, 159, 214, 124, 2, 76, 54, 251, 248, 231, 136, 51, 79, 164, 124, 120, 115, 195, 222, 112, 206, 119, 54, 165, 71, 118, 206, 128, 246, 110, 127, 85, 116, 253, 37, 221, 253, 226, 232, 221, 126, 75, 247, 203, 245, 191, 129, 95, 90, 43, 183, 93, 241, 240, 242, 247, 191, 217, 233, 63, 248, 149, 186, 11, 15, 175, 220, 185, 142, 186, 97, 204, 159, 170, 119, 223, 253, 113, 221, 89, 218, 140, 39, 234, 233, 153, 154, 120, 116, 183, 241, 119, 15, 175, 59, 249, 230, 247, 176, 133, 13, 231, 220, 148, 254, 19, 78, 29, 80, 128, 103, 8, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 72, 64, 1, 66, 2, 10, 16, 18, 80, 128, 144, 128, 2, 132, 4, 20, 32, 36, 160, 0, 33, 1, 5, 8, 9, 40, 64, 228, 239, 223, 255, 1, 86, 215, 160, 210, 61, 35, 200, 250, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130],
                }
            }, 
            body: {
                livroId: 1,
            },
        };

        const imagemSalva = await livrosImagensService.cadastrarImagem(imagemMock);

        expect(imagemSalva.content.livro_id).toBe(imagemMock.body.livroId);
        expect(imagemSalva.content.size).toBeLessThan(5000);

        await livrosImagensService.excluirImagemLivro(imagemSalva.content.id);
    })
})