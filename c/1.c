#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Function to calculate the weighted sum of neighbors
double calculateWeightedSum(int **matrix, int size, int row, int col, int max_depth) {
    double sum = 0.0;
    double weight_sum = 0.0;

    for (int i = -max_depth; i <= max_depth; i++) {
        for (int j = -max_depth; j <= max_depth; j++) {
            int n_row = row + i;
            int n_col = col + j;

            // Check if the neighbor is within matrix bounds
            if (n_row >= 0 && n_row < size && n_col >= 0 && n_col < size) {
                int n_depth = fmax(abs(i), abs(j)) + 1; // Calculate neighborhood depth
                double weight = (double)max_depth / n_depth; // Calculate weight
                sum += matrix[n_row][n_col] * weight;
                weight_sum += weight;
            }
        }
    }

    // Return the weighted average
    return sum / weight_sum;
}

int main(int argc, char *argv[]) {
    if (argc != 4) {
        printf("Usage: %s <input_file> <output_file> <max_depth>\n", argv[0]);
        return 1;
    }

    char *input_file = argv[1];
    char *output_file = argv[2];
    int max_depth = atoi(argv[3]);

    // Open the input file
    FILE *fp = fopen(input_file, "r");
    if (!fp) {
        perror("Error opening input file");
        return 1;
    }

    // Read the matrix size
    int size;
    fscanf(fp, "%d", &size);

    // Allocate memory for the matrix
    int **matrix = (int **)malloc(size * sizeof(int *));
    for (int i = 0; i < size; i++) {
        matrix[i] = (int *)malloc(size * sizeof(int));
    }

    // Read the matrix from the file
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            fscanf(fp, "%d", &matrix[i][j]);
        }
    }
    fclose(fp);

    // Allocate memory for the output matrix
    double **output_matrix = (double **)malloc(size * sizeof(double *));
    for (int i = 0; i < size; i++) {
        output_matrix[i] = (double *)malloc(size * sizeof(double));
    }

    // Process the matrix
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            output_matrix[i][j] = round(calculateWeightedSum(matrix, size, i, j, max_depth));
        }
    }

    // Write the output matrix to the file
    fp = fopen(output_file, "w");
    if (!fp) {
        perror("Error opening output file");
        return 1;
    }

    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            fprintf(fp, "%.0f ", output_matrix[i][j]);
        }
        fprintf(fp, "\n");
    }
    fclose(fp);

    // Free the allocated memory
    for (int i = 0; i < size; i++) {
        free(matrix[i]);
        free(output_matrix[i]);
    }
    free(matrix);
    free(output_matrix);

    return 0;
}
